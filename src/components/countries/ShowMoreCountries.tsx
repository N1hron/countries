import { Status } from '../../types/status';
import Button from '../button/Button';

type Props = {
    status: Status;
    limit: { current: number; max: number };
    increaseLimit: () => void;
};

function ShowMoreCountries({ status, limit, increaseLimit }: Props) {
    const canShowMore = limit.current < limit.max;

    if (status !== 'success' || !canShowMore) return null;
    return (
        <Button isLink={false} onClick={increaseLimit}>
            Show more
        </Button>
    );
}

export default ShowMoreCountries;
