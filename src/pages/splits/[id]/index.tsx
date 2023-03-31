export async function getServerSideProps(context: { params: { id?: string } }) {
  const id = context?.params?.id;

  return {
    redirect: {
      permanent: false,
      destination: !id ? '/404' : `/splits/${id}/overview`,
    },
  };
}

export default function SplitDetailsEmpty() {
  return <></>;
}
