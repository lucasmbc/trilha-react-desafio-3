import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;
    padding-bottom: 120px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Wrapper = styled.div`
    max-width: 374px;
`;

export const Column = styled.div`
    flex: 1;
    align-self: flex-start;
`;

export const Title = styled.h2`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    max-width: 90%;
    margin-bottom: 20px;
    line-height: 44px;

    color: #ffffff;
`;

export const TitleSignUp = styled.p`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
    margin-bottom: 8px;
`;

export const SubtitleSignUp = styled.p`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 35px;
`;

export const CriarText = styled.p`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;

    color: #ffffff;

    margin-top: 35px;
`;

export const FazerLogin = styled.p`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;

    color: #ffffff;

    margin-top: 10px;

    span a {
        color: #23dd7a;
        text-decoration: none;
    }
`;
