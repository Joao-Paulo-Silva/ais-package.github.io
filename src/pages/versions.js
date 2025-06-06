import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import EnContent from '../content/versions/en.md';
import PtBrContent from '../content/versions/pt-br.md';

export default function VersionsPage() {
  const { i18n } = useDocusaurusContext();
  const locale = i18n.currentLocale;

  const Content = locale === 'pt-br' ? PtBrContent : EnContent;

  return (
    <Layout title="Versions">
      <main className="container">
        <Content />
      </main>
    </Layout>
  );
}
