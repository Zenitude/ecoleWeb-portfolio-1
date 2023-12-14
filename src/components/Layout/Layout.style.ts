import styled, { createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, ::before, ::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html, body, #root {
        width: 100%;
        height: 100%;
        font-family: 'Poppins', sans-serif;
        scroll-behavior: smooth;
    }

    h1 {
        font-family: 'Abril Fatface', serif;
    }
`;

export const LayoutContainer = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    .menu {
        position: absolute;
        z-index: 10;
        width: 80px;
        height: 80px;
        top: 20px;
        left: 20px;
        background-color: #333;
        border-radius: 50%;
        border: 2px solid #f1f1f1;
        display: flex;
        justify-content: center;
        align-items: center;
        
        .row {
            width: 40px;
            height: 3px;
            background-color: #f1f1f1;
            border-radius: 15px;
            position: relative;

            &::before {
                content: '';
                position: absolute;
                width: 40px;
                height: 3px;
                background-color: #f1f1f1;
                top: -10px;
                left: 0;
                border-radius: 15px;
            }

            &::after {
                content: '';
                position: absolute;
                width: 40px;
                height: 3px;
                background-color: #f1f1f1;
                top: 10px;
                left: 0;
                border-radius: 15px;
            }
        }

        &.active {
            .row {
                background: transparent;

                &::before {
                    top: 0;
                    transform: rotate(-45deg);
                    transition: top 300ms ease, transform 300ms 300ms ease;
                }

                &::after {
                    top: 0;
                    transform: rotate(45deg);
                    transition: top 300ms ease, transform 300ms 300ms ease;
                }
            }
        }

    }

    .sidebar {
        position: fixed;
        width: 300px;
        height: 100%;
        z-index: 0;

        nav {
            transform: translateX(-110%);
            background-color: #333;
            border-right: 2px dashed #f1f1f1;
            width: 100%;
            height: 100%;
        }

        &.active {
            nav {
                transform: translateX(0);
                transition: transform 300ms ease;
            }
        }

        ul {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            gap: 50px;
            list-style-type: none;
            padding: 50px 0;

            li.home {
                margin-top: auto;
            }

            li.contact {
                margin-bottom: auto;
            }

            li a {
                display: flex;
                width: fit-content;
                margin: 0 auto;
                text-decoration: none;
                color: #f1f1f1;
                font-size: 1.3rem;
            }

            li:first-of-type {

                margin: 50px 0 0;

                a {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 0 auto;
                    width: 150px;
                    height: 150px;
                    box-shadow: 26px 26px 53px #292929, -26px -26px 53px #3d3d3d;
                    border-radius: 50%;

                    img {
                        width: 60%;
                    }
                }
            }

            li:last-of-type {

                margin: auto 0 0;

                img {
                    width: 75px;
                    margin: 0 auto; 
                }
            }
        }
    }

    footer {
        width: 100%;
        min-height: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    main {
        flex-grow: 1;
    }

    @media screen and (min-width: 900px) {
        display: grid;
        grid-template-columns: 300px 1fr;
        grid-template-rows: 1fr 70px;

        .sidebar {
            grid-area: 1 / 1 / 2 / 2;

            .menu {
                display: none;
            }
            
            nav {
                transform: translateX(0);
            }
        }

        main {
            grid-area: 1 / 2 / 2 / 3;
        }

        footer {
            grid-area: 2 / 2 / 3 / 3;
        }
    }
`;