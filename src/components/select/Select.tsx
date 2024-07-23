import { useState, useEffect, useRef, useId } from 'react';
import { KeyboardEventHandler } from 'react';
import ChevronIcon from '../../assets/icons/chevron-down.svg?react';

import './select.scss';

type Props<T extends string> = {
    options: T[];
    label: string;
    className?: string;
    onChange?: (selectedOptionValue: T) => void;
};

function Select<T extends string>({
    options,
    label,
    className = '',
    onChange,
}: Props<T>) {
    const [expanded, setExpanded] = useState(false);
    const [selectedOption, setSelectedOption] = useState<number>();
    const [focusedOption, setFocusedOption] = useState(0);

    const inputRef = useRef<HTMLDivElement>(null);

    const menuId = useId();

    useEffect(() => {
        ['click', 'focus'].forEach((eventType) => {
            window.addEventListener(eventType, (event) => {
                if (event.target !== inputRef.current) {
                    setExpanded(false);
                }
            });
        });
    }, []);

    useEffect(() => {
        if (selectedOption != undefined && onChange) {
            onChange(options[selectedOption]);
        }
    }, [selectedOption]);

    const toggleExpanded = () => setExpanded((prev) => !prev);

    const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
        switch (event.key) {
            case 'Escape':
                setExpanded(false);
                break;
            case 'ArrowDown':
                handleArrowDown();
                break;
            case 'ArrowUp':
                handleArrowUp();
                break;
            case 'Home':
                handleHome();
                break;
            case 'End':
                handleEnd();
                break;
            case 'Tab':
                handleTab();
                break;
            case 'Enter':
            case ' ':
                handleEnterOrSpace();
                break;
        }

        function handleArrowDown() {
            event.preventDefault();

            if (expanded && !event.altKey) {
                setFocusedOption((prev) =>
                    prev === options.length - 1 ? prev : prev + 1
                );
            } else {
                setExpanded(true);
            }
        }

        function handleArrowUp() {
            event.preventDefault();

            if (expanded) {
                if (event.altKey) {
                    setSelectedOption(focusedOption);
                    setExpanded(false);
                } else {
                    setFocusedOption((prev) => (prev === 0 ? prev : prev - 1));
                }
            }
        }

        function handleHome() {
            event.preventDefault();

            if (expanded) {
                setFocusedOption(0);
            }
        }

        function handleEnd() {
            event.preventDefault();

            if (expanded) {
                setFocusedOption(options.length - 1);
            }
        }

        function handleTab() {
            if (expanded) {
                setSelectedOption(focusedOption);
                setExpanded(false);
            }
        }

        function handleEnterOrSpace() {
            if (expanded) {
                setSelectedOption(focusedOption);
                setExpanded(false);
            } else {
                setExpanded(true);
            }
        }
    };

    const renderOptions = () => {
        return options.map((option, i) => {
            const id = `filter-option-${i}`;
            const className =
                'select__option' +
                (focusedOption === i ? ' select__option_focused' : '');

            function handleOptionClick() {
                setSelectedOption(i);
                setFocusedOption(i);
                setExpanded(false);
                inputRef.current?.focus();
            }

            return (
                <div
                    id={id}
                    key={i}
                    role='option'
                    aria-selected={selectedOption === i}
                    onClick={handleOptionClick}
                    className={className}
                >
                    {option}
                </div>
            );
        });
    };

    return (
        <div className={`select ${className}`.trim()}>
            <div
                className='element select__input'
                role='combobox'
                aria-haspopup='listbox'
                aria-controls={menuId}
                aria-label={label}
                aria-expanded={expanded}
                aria-activedescendant={
                    expanded ? `filter-option-${focusedOption}` : ''
                }
                tabIndex={0}
                ref={inputRef}
                onClick={toggleExpanded}
                onKeyDown={handleKeyDown}
            >
                {selectedOption != undefined ? options[selectedOption] : label}
                <ChevronIcon />
            </div>
            {expanded && (
                <div
                    id={menuId}
                    role='listbox'
                    className='element select__menu'
                >
                    {renderOptions()}
                </div>
            )}
        </div>
    );
}

export default Select;
