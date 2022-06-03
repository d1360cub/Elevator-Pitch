import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import GithubIcon from 'react-feather/dist/icons/github';
import MailIcon from 'react-feather/dist/icons/mail';
import LinkedinIcon from 'react-feather/dist/icons/linkedin';

import style from '../styles/social';

const Social = () => (
  <StaticQuery
    query={graphql`
      query SocialQuery {
        site {
          siteMetadata {
            socialLinks {
              github
              linkedin
              mailto
            }
          }
        }
      }
    `}
    render={(data) => {
      const {
        site: {
          siteMetadata: {
            socialLinks: { github, linkedin, mailto },
          },
        },
      } = data;

      return (
        <div css={style}>
          <a target='_blank' rel='noopener noreferrer' href={github}>
            <GithubIcon />
          </a>
          <a target='_blank' rel='noopener noreferrer' href={linkedin}>
            <LinkedinIcon />
          </a>
          <a target='_blank' rel='noopener noreferrer' href={mailto}>
            <MailIcon />
          </a>
        </div>
      );
    }}
  />
);

export default Social;
