import { TitleStyled, SubTitle } from "./Title.style";

interface TitleProps {
    mainTitle: string,
    subTitle: string | JSX.Element
}

export default function Title(props: TitleProps) {
    return (
        <>
            <TitleStyled>{props.mainTitle}</TitleStyled>
            <SubTitle>{props.subTitle}</SubTitle>
        </>
    )
}