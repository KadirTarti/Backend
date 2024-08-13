import TeamList from "@/components/TeamList";
import { getUsers } from "@/helpers/apiFunctions";
import React from "react";

//* You can use fetch with async/await in Server Components,
const Team = async () => {
  //? bu sayede serverda data fetch işlemi serverda gerçekleşti ve cliente data fetch edilmiş olarak geldi
  const users = await getUsers();
  console.log(users);
  return (
    <div className="text-2xl text-center">
      <h1>Team</h1>
      <TeamList users={users} />
    </div>
  );
};

export default Team;
