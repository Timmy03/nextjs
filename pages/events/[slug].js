import React from "react";
import Layout from "@/components/Layout";
import Link from "next/link";
import { API_URL } from "@/config/index";
import styles from "@/styles/Event.module.css";

function EventPage({ evt }) {
  return (
    <Layout>
      <div className={styles.event}>
        <div className={styles.controls}></div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/api/events/${slug}`);
  const events = await res.json();

  return {
    props: {
      evt: events[0],
    },
  };
}

export default EventPage;
