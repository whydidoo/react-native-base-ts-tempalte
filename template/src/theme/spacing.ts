type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>;

type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>;

type SpactingProps = `${IntRange<0, 20>}`;

const spacing = {} as Record<SpactingProps, number>;

export const SPACE_SIZE = 4;

new Array(20).fill(1).forEach((_, index) => {
  spacing[`${index}` as SpactingProps] = index * SPACE_SIZE;
});

export { spacing };
