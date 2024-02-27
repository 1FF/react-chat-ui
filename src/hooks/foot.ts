import { getChat } from 'src/store/slices/chat';
import { getConfig } from 'src/store/slices/config';
import { getEmailIntentions, getPaymentIntentions } from 'src/store/slices/intentions';
import { getMeta } from 'src/store/slices/meta';
import { constructLink } from 'src/utils/formatting';
import { SPECIAL_MERCHANT, SPECIAL_SUPPORT_TICKET, SUPPORT_PURPOSE } from 'src/config/env';
import { useAppSelector } from '.';
import { Roles } from 'src/config';

export const useFootProps = () => {
  const { cid, systemType, marketing, pd } = useAppSelector(getMeta);
  const { translations, purpose, specialUrls } = useAppSelector(getConfig);
  const { isLoading, incoming } = useAppSelector(getChat);
  const { error: streamError } = useAppSelector(store => store.chat);
  const { error: emailError, current: currentEmail } = useAppSelector(getEmailIntentions);
  const { isFormVisible: isPaymentFormVisible, error: paymentIntentError, isSuccessful: paymentSuccess } = useAppSelector(getPaymentIntentions);
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
  };
  const { historyData, historyIds } = useAppSelector(getChat);
  const lastMsgId = [...historyIds].pop();
  const lastMsg = lastMsgId && historyData[lastMsgId];
  const isLastAssistantMsg = lastMsg && lastMsg.role === Roles.assistant;
  // TODO link setting must be done here bedfore markdown maybe there should be text getter
  const link = isLastAssistantMsg && constructLink(lastMsg.content);

  if (isLastAssistantMsg && lastMsg.filtered?.includes('payment_intent')) {
    return {
      ...staticProps,
      isPaymentButtonVisible: true,
    };
  }

  if (isLastAssistantMsg && lastMsg.filtered?.includes('email_intent')) {
    return {
      ...staticProps,
      isEmailFormVisible: true,
      isPaymentFormVisible,
    };
  }

  if (paymentSuccess) {
    return {
      ...staticProps,
      isCtaVisible: true,
      ctaText: translations.ctaTextContent,
      ctaHref: '/',
      isPaymentFormVisible,
    };
  }

  if (isLastAssistantMsg && lastMsg.filtered?.includes(SPECIAL_MERCHANT)) {
    return {
      ...staticProps,
      ctaText: translations.merchantButton,
      ctaHref: specialUrls[SPECIAL_MERCHANT],
    };
  }

  if (isLastAssistantMsg && lastMsg.filtered?.includes(SPECIAL_SUPPORT_TICKET)) {
    return {
      ...staticProps,
      ctaText: translations.supportButton,
      ctaHref: specialUrls[SPECIAL_SUPPORT_TICKET],
    };
  }

  if (link && purpose === SUPPORT_PURPOSE) {
    return {
      ...staticProps,
      isResponseFormVisible: true,
    };
  }

  const isResponseFormVisible = !link && !isLoading && !incoming && (lastMsg?.options?.length === 0 || lastMsg?.role === Roles.user);

  return {
    ...staticProps,
    ctaText: translations.mealButton,
    ctaHref: link,
    isResponseFormVisible,
  };
};
