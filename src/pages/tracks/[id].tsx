import { ActiveTrackProvider } from 'contexts/ActiveTrackProvider';
import { useRouter } from 'next/router';
import TrackDetail from 'templates/TrackDetail';

const Track = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <ActiveTrackProvider id={id as string}>
      <TrackDetail />
    </ActiveTrackProvider>
  );
};

export default Track;
