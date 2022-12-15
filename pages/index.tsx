import Head from "next/head";
import Image from "next/image";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import styles from "../styles/Home.module.css";
import Layout from "../layouts/layout";

export default function Home() {
  return (
    <Layout>
      <main className={styles.main}>
        <h2>LOL</h2>
      </main>
    </Layout>
  );
}

type EventConfig<Events extends { kind: string }> = {
  [E in Events as E["kind"]]: (event: E) => void;
};
function myLogFunction() {
  return (str: string) => {
    console.log(str);
  };
}

function myLoggerClass() {
  return new (class Logger {
    private completeLog: string = "";
    log(str: string) {
      console.log(str);
      this.completeLog += `${str}\n`;
    }
    dumpLog() {
      return this.completeLog;
    }
  })();
}

function SimpleMemoryDatabase<T>() {
  return class SimpleMemoryDatabase {
    private db: Record<string, T> = {};

    set(id: string, value: T): void {
      this.db[id] = value;
    }

    get(id: string): T {
      return this.db[id];
    }

    getObject(): Record<string, T> {
      return this.db;
    }
  };
}

const StringDatabase = SimpleMemoryDatabase<string>();

const sdb1 = new StringDatabase();
sdb1.set("name", "Jack");
console.log(sdb1.get("name"));

type Constructor<T> = new (...args: any[]) => T;

function Dumpable<
  T extends Constructor<{
    getObject(): object;
  }>
>(Base: T) {
  return class Dumpable extends Base {
    dump() {
      console.log(this.getObject());
    }
  };
}

const DumpableStringDatabase = Dumpable(StringDatabase);
const sdb2 = new DumpableStringDatabase();
sdb2.set("name", "Jack");
sdb2.dump();
