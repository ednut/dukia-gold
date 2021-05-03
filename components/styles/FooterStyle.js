import styled from 'styled-components';

const FooterStyle = styled.footer`
    width: 100%;
    min-height: 40rem;
    position: relative;
    background-color: ${props => props.theme.footerColor};
    color: rgba(255, 255, 255, 0.72);
    font-weight: 300;
    font-size: 1.4rem;
    .footer{
        &--wrap{
            display: flex;
            flex-direction: row;
            align-content: space-between;
            padding: 10rem 0;
            @media (max-width: 991px){
                flex-direction: column;
            }
        }
        &--logo-section{
            width: 37%;
            @media (max-width: 991px){
                width: 100%;
            }
            &__logo{
                img{
                    width: 10rem;
                }
            }
            &__caption{
                margin-top: 2rem;
                font-size: 1.4rem;
                width: 80%;
                line-height: 2.4rem;
                @media (max-width: 991px){
                    width: 100%;
                }
            }
            &__social{
                ul{
                    width: 100%;
                    padding: 0;
                    @media (max-width: 991px){
                        text-align:center;
                        margin-bottom: 3rem;
                    }
                    li{
                        display: inline-block;
                        margin-right: 2rem;
                        a{
                            color: rgba(255, 255, 255, 0.72);
                            transition: all 0.3s ease 0s;
                            i{
                                font-size: ${props => props.theme.captionFont};
                            }
                            &:hover{
                                color: ${props => props.theme.white};
                            }
                        }
                    }
                }
            }
        }
        &--link-section{
            width: 37%;
            display: flex;
            flex-direction: row;
            align-content: space-between;
            @media (max-width: 991px){
                width: 100%;
            }
            &__quick-links, &__customer-care{
                width: 40%;
                @media (max-width: 991px){
                    width: 50%;
                }
                ul{
                    margin-top: 0;
                    @media (max-width: 991px){
                        padding: 0;
                        width: 60%;
                        margin: 0 auto;
                    }
                    li{
                        display: block;
                        line-height: 2rem;
                        margin-bottom: 1.5rem;
                        &.title{
                            color: ${props => props.theme.white};
                            font-weight: 500;
                            margin-bottom: 2rem;
                        }
                        a{
                            color: rgba(255, 255, 255, 0.72);
                            transition: all 0.3s ease 0s;
                            &:hover{
                                color: ${props => props.theme.white};
                            }
                        }
                    }
                }
            }
            
        }
        &--subscription-section{
            width: 22%;
            @media (max-width: 991px){
                width: 100%;
            }
            &__title{
                margin-bottom: 1rem;
                @media (max-width: 991px){
                    text-align: center;
                    margin-top: 2rem;
                }
            }
            &__caption{
                font-size: 1.4rem;
                @media (max-width: 991px){
                    text-align: center;
                }
            }
            &__form{
                margin-top: 2rem;
                form{
                    padding: 0.5rem 0.5rem;
                    background: ${props => props.theme.white};
                    display: flex;
                    border-radius: 1rem;
                    font-size: 1.3rem;
                    @media (max-width: 991px){
                        padding: 1rem 0.5rem;
                    }
                    input{
                        width: 70%;
                        border: none;
                        outline: none;
                        padding: 0 10px;
                        font-size: 1.6rem;
                    }
                    button{
                        border: none;
                        outline: none;
                        font-size: 1.3rem;
                        transition: all 0.3s ease 0s;
                        border-radius: 0.8rem;
                        cursor: pointer;
                        outline: none;
                        text-align: center;
                        background: #3188DD;
                        color: #ffffff;
                        font-weight: 300;
                        padding: 0.5rem 1.5rem;
                        @media (max-width: 991px){
                            width: 30%;
                            padding: 1rem 1.5rem;
                        }
                    }
                }
            }
        }
    }
`

export default FooterStyle