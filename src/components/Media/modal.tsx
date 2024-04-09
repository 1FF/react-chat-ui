import { Wrapper } from '../Wrapper'
import { IconBtn } from '../Button'
import { Close } from '../Icons/Close'
import { resetMediaModal } from '../../store/slices/config'
import { useAppDispatch } from '../../hooks'
import { MediaModalProps } from '../../interfaces/store'
import { SyntheticEvent } from 'react'

const VideoLayout = ({ code }: { code: string }) => {
  return (
    <iframe
      data-e2e="video-in-modal"
      className="tw--min-h-[315px] tw--w-full"
      src={`https://www.youtube.com/embed/${code}?enablejsapi=1&rel=0&origin=${window.location.origin}&autoplay=1`}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; modestbranding; showinfo=0; fullscreen"
      frameBorder="0"
    />
  )
}

export const MediaModal = ({ props: { title, code, isVisible, image } }: { props: MediaModalProps }) => {
  const dispatch = useAppDispatch();
  const onCloseModalHandler = (e: SyntheticEvent) => {
    dispatch(resetMediaModal());
  };

  return (
    <Wrapper onClose={onCloseModalHandler}>
      <div className="tw--bg-loader tw--mx-auto tw--max-w-[335px] md:tw--max-w-[570px] tw--mt-20 tw--rounded-lg tw--p-3 tw--shadow-card" onClick={(e) => e.stopPropagation()}>
        <div className="tw--pb-6 tw--px-1 tw--w-full tw--flex tw--justify-between tw--items-center tw--text-zeta">
          <h3 className="tw--text-2xl">{title}</h3>
          <IconBtn e2e="media-modal-close-btn" color="secondary" onClick={onCloseModalHandler}>
            <Close />
          </IconBtn>
        </div>

        <div className="tw--w-full tw--h-full tw--flex tw--justify-center tw--items-end tw--bg-whisper">
          {image ? <img data-e2e="image-in-modal"
            src={image} alt={title} /> : <VideoLayout code={code} />}
        </div>
      </div>
    </Wrapper>
  )
}
