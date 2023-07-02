/// <reference types="@testing-library/jest-native" />

declare module '*.svg' {
  import React from 'react';
  import {SvgProps} from 'react-native-svg';

  type Props = SvgProps & {children?: React.ReactNode};
  const content: React.FC<Props>;

  export default content;
}

declare module 'react-native-mmkv' {
  interface Listener {
    remove: () => void;
  }

  interface MMKVInterface {
    /**
     * Set a value for the given `key`.
     */
    set: (key: string, value: boolean | string | number | Uint8Array) => void;
    /**
     * Get the boolean value for the given `key`, or `undefined` if it does not exist.
     *
     * @default undefined
     */
    getBoolean: (key: string) => boolean | undefined;
    /**
     * Get the string value for the given `key`, or `undefined` if it does not exist.
     *
     * @default undefined
     */
    getString: (key: string) => string | undefined;
    /**
     * Get the number value for the given `key`, or `undefined` if it does not exist.
     *
     * @default undefined
     */
    getNumber: (key: string) => number | undefined;
    /**
     * Get a raw buffer of unsigned 8-bit (0-255) data.
     *
     * @default undefined
     */
    getBuffer: (key: string) => Uint8Array | undefined;
    /**
     * Checks whether the given `key` is being stored in this MMKV instance.
     */
    contains: (key: string) => boolean;
    /**
     * Delete the given `key`.
     */
    delete: (key: string) => void;
    /**
     * Get all keys.
     *
     * @default []
     */
    getAllKeys: () => string[];
    /**
     * Delete all keys.
     */
    clearAll: () => void;
    /**
     * Sets (or updates) the encryption-key to encrypt all data in this MMKV instance with.
     *
     * To remove encryption, pass `undefined` as a key.
     *
     * Encryption keys can have a maximum length of 16 bytes.
     */
    recrypt: (key: string | undefined) => void;
    /**
     * Adds a value changed listener. The Listener will be called whenever any value
     * in this storage instance changes (set or delete).
     *
     * To unsubscribe from value changes, call `remove()` on the Listener.
     */
    addOnValueChangedListener: (
      onValueChanged: (key: string) => void,
    ) => Listener;
  }
  export type NativeMMKV = Pick<
    MMKVInterface,
    | 'clearAll'
    | 'contains'
    | 'delete'
    | 'getAllKeys'
    | 'getBoolean'
    | 'getNumber'
    | 'getString'
    | 'getBuffer'
    | 'set'
    | 'recrypt'
  >;
  export declare class MMKV<T extends string> {
    /**
     * Creates a new MMKV instance with the given Configuration.
     * If no custom `id` is supplied, `'mmkv.default'` will be used.
     */

    constructor(configuration?: MMKVConfiguration);
    private get onValueChangedListeners();
    private getFunctionFromCache;
    private onValuesChanged;
    set(key: T, value: boolean | string | number | Uint8Array): void;
    getBoolean(key: T): boolean | undefined;
    getString(key: T): string | undefined;
    getNumber(key: T): number | undefined;
    getBuffer(key: T): Uint8Array | undefined;
    contains(key: T): boolean;
    delete(key: T): void;
    getAllKeys(): T[];
    clearAll(): void;
    recrypt(key: string | undefined): void;
    toString(): string;
    toJSON(): object;
    addOnValueChangedListener(onValueChanged: (key: T) => void): Listener;
  }
}
