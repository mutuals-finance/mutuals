export function pickFragment<
  TFragment extends TypedDocumentNode<any, any>,
  TUnion extends { __typename?: string },
>(
  typename: ResultOf<TFragment>["__typename"],
  value: TUnion | null | undefined,
): FragmentType<TFragment> | null {
  return value?.__typename === typename ? (value as any) : null;
}
