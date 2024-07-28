import { Status } from '../../types/status';
import Button from '../buttons/button/Button';

type Props = {
    status: Status;
    limit: { current: number; max: number };
    increaseLimit: () => void;
};

function ShowMoreButton({ status, limit, increaseLimit }: Props) {
    const canShowMore = limit.current < limit.max;

    if (status !== 'success' || !canShowMore) return null;
    return (
        <Button
            isLink={false}
            onClick={increaseLimit}
            style={{ alignSelf: 'center' }}
        >
            Show more
        </Button>
    );
}

export default ShowMoreButton;
