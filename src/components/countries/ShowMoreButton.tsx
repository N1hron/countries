import { useAppDispatch, useAppSelector } from '../../store';
import { setCurrentLimit } from '../../store/slices/countriesSlice';
import { selectCountriesLimit } from '../../store/slices/countriesSlice/selectors';
import { Button } from '../buttons/button/Button';

function ShowMoreButton() {
    const dispatch = useAppDispatch();
    const limit = useAppSelector(selectCountriesLimit);
    const canShowMore = limit.current < limit.max;

    function increaseLimit() {
        dispatch(setCurrentLimit(limit.current + 8));
    }

    if (!canShowMore) return null;
    return (
        <Button isLink={false} onClick={increaseLimit} style={{ alignSelf: 'center' }}>
            Show more
        </Button>
    );
}

export { ShowMoreButton };
