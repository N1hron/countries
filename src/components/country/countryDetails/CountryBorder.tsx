import { useState, useEffect } from 'react';
import { Button } from '../../buttons/button/Button';
import { Status } from '../../../types/status';
import { getCountryNameByCode } from '../../../api/getCountryNameByCode';
import { StatusIcon } from '../../status/statusIcon/StatusIcon';

type Props = {
    countryCode: string;
};

function CountryBorder({ countryCode }: Props) {
    const [countryName, setCountryName] = useState<string>();
    const [status, setStatus] = useState<Status>('idle');

    useEffect(() => {
        setStatus('loading');
        getCountryNameByCode(countryCode)
            .then((country) => {
                setCountryName(country.name);
                setStatus('success');
            })
            .catch(() => setStatus('error'));

        // eslint-disable-next-line
    }, []);

    if (status === 'success' && countryName) {
        return (
            <Button isLink to={`/${countryName}`} mini>
                {countryName}
            </Button>
        );
    }

    return (
        <Button disabled mini>
            <StatusIcon status={status} />
        </Button>
    );
}

export { CountryBorder };
