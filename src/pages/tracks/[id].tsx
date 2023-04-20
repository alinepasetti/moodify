import { ActiveTrackProvider } from 'contexts/ActiveTrackProvider';
import { useRouter } from 'next/router';
import TrackContainer from 'templates/TrackContainer';

const Track = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <ActiveTrackProvider id={id as string}>
      <TrackContainer />
    </ActiveTrackProvider>
  );
};

export default Track;
