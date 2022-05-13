type isOptional<Structure, MemberUnion extends keyof Structure> = Omit<
  Structure,
  MemberUnion
> &
  Partial<Pick<Structure, MemberUnion>>;
