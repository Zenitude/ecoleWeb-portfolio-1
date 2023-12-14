import styled from "styled-components";
import home from "../../assets/accueil.jpg";

export const HomeContainer = styled.main`
    
    #home {
        border-bottom: 1px dashed #333;
        z-index: -1;
        height: 500px;
        background: url(${home}) no-repeat top right;
        background-size: cover;
        padding: 120px 10px 0;
        display: flex;
        flex-direction: column;
        gap: 20px;
        position: relative;

        h1 {
            font-size: 30px;
        }

        a {
            display: inline-block;
            text-decoration: none;
        }

        [href="#pres"] {
            display: none;
            width: fit-content;
            padding: 5px 10px;
            border-radius: 50%;
            position: absolute;
            bottom: 50px;
            border: 2px solid #333;
            box-shadow: 0 0 0 0 #333;
        }
        
        .links {
            display: flex;
            gap: 10px;

            a {
                padding: 5px 10px;
                border: 2px solid #000;
            }
        }

        .networks {
            display: flex;
            gap: 10px;

            a {
                width: 75px;
                height: 75px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                border: 2px solid #333;
            }

            img {
                width: 40px;
                height: 40px;
            }
        }

        .Typewriter {
            font-size: 1.5rem;
        }

        .language-1 { color: red; font-weight: bold;}
        .language-2 { color: green; font-weight: bold;}
        .language-3 { color: blue; font-weight: bold;}
        .language-4 { color: purple; font-weight: bold;}
        .language-5 { color: orange; font-weight: bold;}
    }

    #pres {
        color: #f1f1f1;
        background: linear-gradient(to right, #29323c, #485563);
        padding: 50px 40px;
        min-height: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 20px;

        article {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            line-height: 1.5;
            gap: 20px;
        }

        aside {
            ol {
                list-style-type: none;

                span {
                    font-weight: bold;
                    font-size: 18px;
                    font-family: 'Abril Fatface', serif;
                }
            }
        }

        h2, h3 {
            width: 100%;
            text-align: center;
            font-family: 'Poppins', sans-serif;
        }
    }

    #port {
        border-top: 1px dashed #333;
        padding: 50px 10px;
        display: flex;
        flex-direction: column;
        gap: 40px;

        h2 {
            text-align: center;
            font-size: 28px;
        }

        .projects {
            width: 100%;
            max-width: 1240px;
            margin: 0 auto;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            gap: 20px;

            .project {
                min-width: 250px;
                width: 30%;
                height: 400px;
                box-shadow: 0 0 5px rgba(0,0,0,0.3);

                article {
                    width: 100%;
                    height: 100%;

                    img {
                        width: 100%;
                        height: 50%;
                        object-fit: cover;
                    }

                    .desc {
                        padding: 10px;
                        display: flex;
                        flex-direction: column;
                        gap: 10px;

                        a {
                            width: fit-content;
                            border: 1px solid #000;
                            padding: 10px 15px;
                            text-decoration: none;
                            color: #000;
                        }
                    }

                }
            }
        }


    }

    #skills {
        background: linear-gradient(to right, #29323c, #485563);
        color: #f1f1f1;
        padding: 50px 10px;
        min-height: 500px;

        h2 {
            font-size: 28px;
            margin-bottom: 50px;
            text-align: center;
        }

        .skills {  
            width: 100%;
            max-width: 1240px;
            margin: 0 auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 50px 20px;

            article {
                width: 40%;
                min-width: 250px;

                progress {
                    width: 100%;
                }
            }
        }
    }

    #exp {
        padding: 50px 10px;

        h2 {
            margin-bottom: 50px;
            text-align: center;
            font-size: 28px;
        }

        .experiences {
            display: flex;
            flex-direction: column;
            position: relative;
            max-width: 800px;
            min-width: 240px;
            margin: 0 auto;

            .bar {
                position: absolute;
                left: 20px;
                width: 10px;
                height: 100%;
                background-color: #000;
                z-index: 1;
            }

            .experience {
                display: flex;
                z-index: 2;
                gap: 10px;
                position: relative;
                width: 100%;
                max-width: 800px;
                padding-bottom: 50px;

                & > div {
                    max-width: 50px;
                    min-width: 50px;
                    height: 50px;
                    border: 2px solid rgb(0,0,0);
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    img {
                        width: 30px;
                        height: 30px;
                    }                    
                }

                article {
                    min-height: 200px;
                    position: relative;
                    top: -10px;
                    left: 10px;
                    z-index: 5;
                    background-color: #fff;

                    h3 {
                        margin-bottom: 20px;
                        font-size: 1.5rem;
                    }

                    .desc {
                        background-color: #fff;
                        border: 2px solid #000;
                        z-index: 5;
                        width: 100%;
                        height: 100%;
                        padding: 20px;
                    }

                    &:hover {
                        top: 0;
                        left: 0;

                        &::before {
                            top: 0;
                            height: 0;
                            border: none;
                        }
                    }

                    &::before {
                        content: "";
                        border: 1px solid #000;
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        top: 10px;
                        left: -10px;
                        z-index: -1;
                    }
                }
            }

            .plane {
                max-width: 50px;
                min-width: 50px;
                height: 50px;
                border: 2px solid rgb(0,0,0);
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;

                img {
                    width: 30px;
                    height: 30px;
                } 
            }
        }
    }

    #banner {
        width: 100%;
        padding: 50px 10px;
        background: url(${home}) no-repeat top right;
        background-size: cover;
        background-attachment: fixed;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        gap: 20px;
        font-size: 24px;
        min-height: 200px;
    }

    #contact {
        padding: 50px 10px;

        h2 {
            margin-bottom: 40px;
            text-align: center;
            font-weight: normal;
            font-size: 28px;

            span {
                font-weight: bold;
            }
        }

        form {
            display: flex;
            flex-direction: column;
            gap: 50px;
            width: 80%;
            max-width: 1200px;
            min-width: 250px;
            margin: 0 auto 50px;

            textarea, button {
                border: 2px solid grey;
            }

            button {
                width: fit-content;
                font-size: 1.3rem;
                padding: 15px 45px;
                border-radius: 35px;
                color: grey;
                background: transparent;
            }

            div {
                position: relative;
                height: 40px;
            }

            label, input {
                position: absolute;
                width: 100%;
                height: 100%;
            }

            input {
                border: none;
                border-bottom: 2px solid grey;
            }

            label {
                z-index: 2;
                top: 7px;
                left: 15px;
                transition: top 0.3s ease-in-out;
                font-size: 1.2rem;
            }

            div:focus-within label, label.active {
                top: -35px;
                color: #00f;
            }

            input {
                padding-left: 15px;
                font-size: 1.1rem;
            }

            textarea {
                width: 100%;
                min-height: 200px;
                padding: 15px;
                font-size: 1.1rem;
                resize: none;
            }
        }
    }

    @keyframes pulse {
        100% {
            box-shadow: 0 0 0 8px rgba(255,255,255,0.1);
        }
    }

    @media screen and (min-width: 450px) {
        #home {
            height: 600px;

            p {
                font-size: 18px;
            }

            h1 {
                font-size: 50px;
            }
        }

    }

    @media screen and (min-width: 700px) {
        #home {
            height: 700px;
        }

        #banner {
            flex-direction: row;
        }
        
    }

    @media screen and (min-width: 1000px) {
        #home {
            height: 100vh;
            padding-inline: 40px;

            h1 {
                font-size: 70px;
                filter: drop-shadow(0 0 1px #f1f1f1);
            }

            p {
                font-size: 28px;
            }

            a {
                font-size: 20px;
            }

            [href="#pres"] {
                display: inline-block;
                animation: pulse 1.3s infinite;
            }
        }

        #pres {
            article {
                width: 40%;
            }

            aside {
                ol {
                    font-size: 18px;

                    span {
                        font-size: 24px;
                    }
                }
            }
        }
        
    }

    @media screen and (min-width: 1200px) {
        #pres {
            clip-path: polygon(25% 0%, 100% 0, 75% 100%, 0% 100%);
        }
    }

    
`;