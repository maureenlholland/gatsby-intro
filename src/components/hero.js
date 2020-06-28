import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const ImageBg = styled(BackgroundImage)`
    background-image: url('/images/ken-wyatt-hero.jpg');
    background-size: cover;
    height: 50vh;
    + * {
        margin-top: 0
    }
`;

const TextBox = styled('div')`
    background-image: linear-gradient(to top, #ddbbffdd 2rem, #ddbbff00);
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-end;
    padding: 0 calc((100vw - 550px) / 2) 2rem;
    width: 100%;
    h1 {
        text-shadow: 1px 1px 3px #eeddff66;
        font-size: 2.25rem;
    }
    p, a {
        color: #222;
        margin-top: 0;
    }
    a {
        margin-top: 0.5rem;
    }
`;

const Hero = () => {
    const { image } = useStaticQuery(graphql`
        query {
            image: file(relativePath: { eq: "ken-wyatt-hero.jpg" }) {
                sharp: childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    return (
        <ImageBg tag="section" fluid={image.sharp.fluid}>
            <TextBox>
                <h1>Gatsby Intro</h1>
                <p>A test for Gatsby dev workflow. <Link to="/about">About page</Link></p>
            </TextBox>
        </ImageBg>
    );
}

export default Hero;
