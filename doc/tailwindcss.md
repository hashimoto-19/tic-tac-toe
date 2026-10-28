# Tailwind CSS チートシート

このプロジェクトは Tailwind CSS v4（`tailwindcss` と `@tailwindcss/vite`）を使っています。クラス名を HTML の `class`（React では `className`）に書くと、対応する CSS が当たります。

## このプロジェクトでの有効化

`src/index.css` の先頭で読み込んでいます。

```css
@import "tailwindcss";
```

`vite.config.ts` では `tailwindcss()` プラグインを有効にしています。追加の設定ファイルはありません。

React では次のように書きます。

```tsx
<button className="h-24 w-24 border text-3xl">X</button>
```

クラスは半角スペースで区切ります。後に書いたクラスが同じプロパティなら上書きします。

## レイアウト

### Flex

親要素に付けます。子の並びを決めます。

| クラス | 意味 |
| --- | --- |
| `flex` | 横並び（初期値は横） |
| `inline-flex` | 中身の幅だけの flex |
| `flex-col` | 縦並び |
| `flex-row` | 横並び（明示） |
| `flex-wrap` | 折り返す |
| `items-center` | 交差方向の中央（横並びなら上下中央） |
| `items-start` | 交差方向の先頭 |
| `justify-center` | 主方向の中央（横並びなら左右中央） |
| `justify-between` | 両端に寄せ、間を空ける |
| `justify-end` | 主方向の末尾 |
| `gap-2` | 子の間隔（`2` = 8px） |
| `flex-1` | 余った幅を等分して伸びる |

マスの中で文字を中央に置く例です。

```tsx
<button className="flex h-24 w-24 items-center justify-center">X</button>
```

### Grid

| クラス | 意味 |
| --- | --- |
| `grid` | グリッドにする |
| `grid-cols-3` | 列を 3 つにする |
| `grid-cols-1` | 列を 1 つにする |
| `grid-rows-3` | 行を 3 つにする |
| `col-span-2` | 2 列分をつなぐ |
| `gap-2` | セルの間隔 |
| `gap-x-4` | 左右の間隔だけ |
| `gap-y-4` | 上下の間隔だけ |

三目並べの盤面です。

```tsx
<div className="grid grid-cols-3 gap-2">
  <button>X</button>
</div>
```

## 余白

数字の単位は `1` = 4px です。`4` = 16px、`8` = 32px。

| クラス | 意味 |
| --- | --- |
| `p-4` | 内側の余白（全方向） |
| `px-4` | 左右の内側余白 |
| `py-2` | 上下の内側余白 |
| `pt-4` | 上だけ（`pr` 右、`pb` 下、`pl` 左） |
| `m-4` | 外側の余白 |
| `mx-auto` | 左右の外側余白を auto にして中央寄せ |
| `mt-8` | 上の外側余白 |
| `space-x-2` | 横に並んだ子の間 |
| `space-y-2` | 縦に並んだ子の間 |

`p-0` や `m-0` で余白を消します。

## サイズ

| クラス | 意味 |
| --- | --- |
| `w-24` | 幅 96px |
| `h-24` | 高さ 96px |
| `w-full` | 親の幅いっぱい |
| `h-full` | 親の高さいっぱい |
| `h-screen` | 画面の高さ |
| `min-h-screen` | 最低でも画面の高さ |
| `max-w-sm` | 最大幅 384px |
| `size-24` | 幅と高さを同じにする（96px） |
| `aspect-square` | 正方形（幅と高さの比を 1:1） |

決まった数値にするときは角括弧を使います。

```tsx
<div className="w-[320px]" />
```

## 文字

| クラス | 意味 |
| --- | --- |
| `text-sm` | 14px |
| `text-base` | 16px |
| `text-xl` | 20px |
| `text-3xl` | 30px |
| `font-bold` | 太字 |
| `font-medium` | やや太い |
| `text-center` | 中央揃え |
| `text-left` | 左揃え |
| `leading-none` | 行間を詰める |
| `tracking-wide` | 字間を広げる |
| `underline` | 下線 |
| `truncate` | 1 行で省略記号 |

色は `text-red-600` のように書きます。

## 色

`色名-濃さ` です。濃さは `50`（薄い）から `950`（濃い）まで、100 刻みが基本です。

| クラス | 意味 |
| --- | --- |
| `bg-white` | 背景を白 |
| `bg-black` | 背景を黒 |
| `bg-gray-100` | 薄いグレーの背景 |
| `text-gray-900` | ほぼ黒の文字 |
| `text-blue-600` | 青の文字 |
| `border-gray-400` | 枠線の色 |
| `bg-red-500/50` | 赤の背景を 50% の不透明度に |

よく使う色名は `gray` `red` `blue` `green` `yellow` `slate` です。

## 枠線・角丸・影

| クラス | 意味 |
| --- | --- |
| `border` | 1px の枠線 |
| `border-2` | 2px の枠線 |
| `border-b` | 下の枠線だけ |
| `border-gray-400` | 枠線の色 |
| `rounded` | 少し角を丸くする |
| `rounded-md` | 中くらいの角丸 |
| `rounded-lg` | 大きめの角丸 |
| `rounded-full` | 円（またはカプセル） |
| `shadow` | 薄い影 |
| `shadow-md` | やや強い影 |
| `shadow-none` | 影を消す |

## 表示

| クラス | 意味 |
| --- | --- |
| `block` | ブロック表示 |
| `inline` | インライン表示 |
| `hidden` | 非表示 |
| `overflow-hidden` | はみ出した部分を隠す |
| `absolute` | 絶対配置（親が `relative` のとき、その中を基準にする） |
| `relative` | 配置の基準にする |
| `inset-0` | 上下左右を 0 にして親いっぱいに広げる |
| `z-10` | 重なり順を上げる |
| `cursor-pointer` | マウスを指の形にする |
| `select-none` | 文字選択を防ぐ |

画面の中央に置く例です。

```tsx
<div className="flex min-h-screen items-center justify-center">
  <div className="grid grid-cols-3 gap-2" />
</div>
```

## 状態

クラスの前に状態を付けます。

| 書き方 | 意味 |
| --- | --- |
| `hover:bg-gray-100` | マウスを乗せたとき |
| `focus:outline-2` | フォーカスしたとき |
| `focus-visible:outline-2` | キーボード操作でフォーカスしたとき |
| `active:scale-95` | 押しているあいだ |
| `disabled:opacity-50` | 無効なとき |
| `disabled:cursor-not-allowed` | 無効なときのカーソル |

```tsx
<button
  type="button"
  className="border hover:bg-gray-100 disabled:opacity-50"
>
  X
</button>
```

## 画面幅

先頭に画面幅を付けると、その幅以上のときだけ適用されます。

| 接頭辞 | おおよその幅 |
| --- | --- |
| `sm:` | 640px 以上 |
| `md:` | 768px 以上 |
| `lg:` | 1024px 以上 |
| `xl:` | 1280px 以上 |

何も付けないクラスが狭い画面用です。広い画面用を後ろに足します。

```tsx
<div className="grid grid-cols-1 gap-2 md:grid-cols-3" />
```

## この盤面で使う組み合わせ

```tsx
<div className="grid grid-cols-3 gap-2">
  <button
    type="button"
    className="flex h-24 w-24 items-center justify-center border text-3xl font-bold hover:bg-gray-100"
  >
    X
  </button>
</div>
```

| クラス | このボタンでの役割 |
| --- | --- |
| `flex items-center justify-center` | 文字をマスの中央に置く |
| `h-24 w-24` | マスを 96px の正方形にする |
| `border` | 枠を付ける |
| `text-3xl font-bold` | 大きい太字にする |
| `hover:bg-gray-100` | 乗せたとき背景を薄くする |

## 調べるとき

公式のクラス一覧は [Tailwind CSS ドキュメント](https://tailwindcss.com/docs) です。

v3 向けの記事を写すときは、次の名前が v4 で変わっています。

| v3 の記事 | v4 |
| --- | --- |
| `@tailwind base;` など 3 行 | `@import "tailwindcss";` |
| `bg-gradient-to-r` | `bg-linear-to-r` |
| `shadow-sm` | 以前の見た目は `shadow-xs` |
| `outline-none` | 枠線を消すだけなら `outline-hidden` |
