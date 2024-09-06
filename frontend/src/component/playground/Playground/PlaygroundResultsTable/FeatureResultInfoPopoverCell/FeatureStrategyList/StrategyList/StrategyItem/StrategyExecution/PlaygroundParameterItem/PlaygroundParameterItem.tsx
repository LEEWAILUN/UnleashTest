import { Chip, Typography, useTheme, styled } from '@mui/material';
import { ConditionallyRender } from 'component/common/ConditionallyRender/ConditionallyRender';
import StringTruncator from 'component/common/StringTruncator/StringTruncator';
import CancelOutlined from '@mui/icons-material/CancelOutlined';

interface IConstraintItemProps {
    value: Array<string | number>;
    text: string;
    input?: string | number | boolean | 'no value';
    showReason?: boolean;
    disabled?: boolean;
}

const StyledDivContainer = styled('div', {
    shouldForwardProp: (prop) => prop !== 'showReason',
})<{ showReason?: boolean }>(({ theme, showReason }) => ({
    width: '100%',
    padding: theme.spacing(2, 3),
    borderRadius: theme.shape.borderRadiusMedium,
    border: `1px solid ${theme.palette.divider}`,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: theme.spacing(2),
    opacity: showReason ? 0.9 : 1,
    backgroundColor: showReason ? theme.palette.background.paper : 'inherit',
}));

const StyledDivColumn = styled('div')(({ theme }) => ({
    flexDirection: 'column',
}));

const StyledChip = styled(Chip)(({ theme }) => ({
    margin: theme.spacing(0.5),
}));

const StyledParagraph = styled('p', {
    shouldForwardProp: (prop) => prop !== 'disabled',
})<{ disabled: boolean }>(({ theme, disabled }) => ({
    display: 'inline',
    margin: theme.spacing(0.5, 0),
    maxWidth: '95%',
    textAlign: 'center',
    wordBreak: 'break-word',
    color: disabled ? theme.palette.text.secondary : 'inherit',
}));

export const PlaygroundParameterItem = ({
    value,
    text,
    input,
    showReason = false,
    disabled = false,
}: IConstraintItemProps) => {
    const theme = useTheme();

    const color = input === 'no value' && !disabled ? 'error' : 'neutral';
    const reason = `value does not match any ${text}`;

    return (
        <StyledDivContainer showReason={showReason}>
            <Typography variant='subtitle1' color={theme.palette[color].main}>
                {`${input}`}
            </Typography>
            <StyledDivColumn>
                <ConditionallyRender
                    condition={Boolean(showReason)}
                    show={
                        <Typography
                            variant='subtitle1'
                            color={
                                disabled
                                    ? theme.palette.text.secondary
                                    : theme.palette.error.main
                            }
                        >
                            {reason}
                        </Typography>
                    }
                />
                <ConditionallyRender
                    condition={value.length === 0}
                    show={<p>No {text}s added yet.</p>}
                    elseShow={
                        <div>
                            <StyledParagraph disabled={disabled}>
                                {value.length}{' '}
                                {value.length > 1 ? `${text}s` : text} will get
                                access.
                            </StyledParagraph>
                            {value.map((v: string | number) => (
                                <StyledChip
                                    key={v}
                                    disabled={disabled}
                                    label={
                                        <StringTruncator
                                            maxWidth='300'
                                            text={v.toString()}
                                            maxLength={50}
                                        />
                                    }
                                />
                            ))}
                        </div>
                    }
                />
            </StyledDivColumn>
            <ConditionallyRender
                condition={Boolean(showReason)}
                show={
                    <CancelOutlined color={disabled ? 'disabled' : 'error'} />
                }
                elseShow={<div />}
            />
        </StyledDivContainer>
    );
};
