import { Roles } from '../config';
import { SUPPORT_PURPOSE } from '../config/env';
import { getChat } from '../store/slices/chat';
import { getConfig } from '../store/slices/config';
import { getEmailIntentions, getPaymentIntentions } from '../store/slices/intentions';
import { getMeta } from '../store/slices/meta';
import { getQueryParam } from '../utils';
import { useAppSelector } from '.';

export const useFootProps = () => {
  const term = getQueryParam();
  const { cid, systemType, marketing, pd } = useAppSelector(getMeta);
  const { translations, purpose, specialUrls } = useAppSelector(getConfig);
  const { isLoading, isStreaming, record, thread } = useAppSelector(getChat);
  const { error: streamError } = useAppSelector((store) => store.chat);
  const storedLink = useAppSelector((store) => store.intentions.link);
  const { error: emailError, current: currentEmail } = useAppSelector(getEmailIntentions);
  const {
    isFormVisible: isPaymentFormVisible,
    error: paymentIntentError,
    isSuccessful: paymentSuccess
  } = useAppSelector(getPaymentIntentions);
  const error = streamError || emailError || paymentIntentError;
  const staticProps = {
    systemType,
    marketing,
    error,
    cid,
    isLoading,
    currentEmail,
    translations,
    pd,
    isStreaming,
    isPaymentButtonVisible: false,
    isPaymentFormVisible: false,
    isEmailFormVisible: false,
    isResponseFormVisible: false,
    ctaText: '',
    ctaHref: '',
  };

  const currentThread = thread[term];
  if (!currentThread) {
    return staticProps;
  }

  const lastMsgId = [...record[currentThread].historyIds].pop();
  const lastMsg = lastMsgId && record[currentThread].historyData[lastMsgId];
  const isLastAssistantMsg = lastMsg && lastMsg.role === Roles.assistant;
  const link = isLastAssistantMsg && storedLink;
  const noButtonChoices = !(lastMsg && lastMsg?.content.find((m) => m.buttons));
  const hasPaymentIntent = lastMsg && lastMsg?.content.find((m) => m.payment);
  const hasEmailIntent = lastMsg && lastMsg?.content.find((m) => m.email);

  if (isLastAssistantMsg && hasPaymentIntent) {
    return {
      ...staticProps,
      isPaymentButtonVisible: true,
    };
  }

  if (isLastAssistantMsg && hasEmailIntent) {
    return {
      ...staticProps,
      isEmailFormVisible: true,
      isPaymentFormVisible,
    };
  }

  if (paymentSuccess) {
    return {
      ...staticProps,
      ctaText: translations.ctaTextContent,
      ctaHref: '/',
      isPaymentFormVisible,
    };
  }

  const message = lastMsg && lastMsg?.content?.find((m) => m.special);
  if (isLastAssistantMsg && message && message?.special && specialUrls[message.special]) {
    return {
      ...staticProps,
      ctaText: specialUrls[message.special].includes('merchant') ? translations.merchantButton : translations.supportButton,
      ctaHref: specialUrls[message.special],
    };
  }

  if (link && purpose === SUPPORT_PURPOSE && noButtonChoices) {
    return {
      ...staticProps,
      isResponseFormVisible: true,
    };
  }

  const isResponseFormVisible = lastMsg && !link && !isLoading && (noButtonChoices || lastMsg?.role === Roles.user);

  return {
    ...staticProps,
    ctaText: translations.mealButton,
    ctaHref: link,
    isResponseFormVisible,
  };
};
