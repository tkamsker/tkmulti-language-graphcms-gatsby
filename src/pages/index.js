import React from 'react';
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link } from 'gatsby';
import { getUser, isLoggedIn } from "../services/auth"

export default () => {
  const data = useStaticQuery(graphql`
    {
      gcms {
        es: pages {
          title(locale: ES)
          slug(locale: ES)
          content(locale: ES) {
            html
          }
        }
        en: pages {
          title(locale: EN)
          slug(locale: EN)
          content(locale: EN) {
            html
          }
        }
        de: pages {
          title(locale: DE)
          slug(locale: DE)
          content(locale: DE) {
            html
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <h1>Hello {isLoggedIn() ? getUser().name : "world"}!</h1>
    <p>
      {isLoggedIn() ? (
        <>
          You are logged in, so check your{" "}
          <Link to="/app/profile">profile</Link>
        </>
      ) : (
        <>
          You should <Link to="/app/login">log in</Link> to see restricted
          content
        </>
      )}
    </p>
    <div style={{ maxWidth: 600, margin: '5rem auto', width: '90%' }}>
      <h2>Español</h2>
      {data.gcms.es.map(page => (
        <li key={page.slug}>
          <Link to={`/es/${page.slug}/`}>{page.title}</Link>
        </li>
      ))}

      <h2>Deutsch</h2>
      {data.gcms.de.map(page => (
        <li key={page.slug}>
          <Link to={`/de/${page.slug}/`}>{page.title}</Link>
        </li>
      ))}

      <h2>English</h2>
      {data.gcms.en.map(page => (
        <li key={page.slug}>
          <Link to={`/${page.slug}/`}>{page.title}</Link>
        </li>
      ))}
    </div>
    </Layout>
  );
};
