import DetailCard from "@/components/DetailCard";
import { getUsers, getUsersDetail } from "@/helpers/apiFunction";
import React from "react";

const UserDetail = async ({ params: { id } }) => {
  const person = await getUsersDetail(id);
  console.log(person);
  return (
    <div className="text-center">
      <h1 className="text-2xl">Team Person</h1>
      <DetailCard {...person} />
    </div>
  );
};

export default UserDetail;



export async function generateStaticParams() {
  const users = await getUsers();
  return users.map((user) => ({id: user.id.toString() }))
}

export async function generateMetaData({params: {id}}) {
  const person = await getUsersDetail(id);
  return{
    title: person.first_name + " " + person.last_name,
  };
}  