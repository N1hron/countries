import useCountries from '../hooks/useCountries';
import Button from './button/Button';

function ShowMoreCountries() {
    const { status, limit, increaseLimit } = useCountries();

    const handleClick = () => increaseLimit();

    const canShowMore = limit.current < limit.max;

    return (
        status === 'success' &&
        canShowMore && (
            <Button isLink={false} onClick={handleClick}>
                Show more
            </Button>
        )
    );
}

export default ShowMoreCountries;
