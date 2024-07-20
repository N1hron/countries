import useCountries from '../../hooks/useCountries';
import Button from '../button/Button';

function ShowMoreCountries() {
    const { status, limit, increaseLimit } = useCountries();

    const handleClick = () => increaseLimit();

    const canShowMore = limit.current < limit.max;

    if (status !== 'success' || !canShowMore) return null;
    return (
        <Button isLink={false} onClick={handleClick}>
            Show more
        </Button>
    );
}

export default ShowMoreCountries;
