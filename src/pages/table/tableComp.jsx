import React, { useEffect, useState } from "react";

const TableComp = () => {
  const [sort, setSort] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [fillterdata, setFilterData] = useState([]);
  const data = [
    {
      name: "surya",
      emp: "12131",
      role: "MERN stack",
    },
    {
      name: "king",
      emp: "33333",
      role: "HR",
    },
    {
      name: "raja",
      emp: "4444",
      role: "TESTER",
    },
    {
      name: "surya5656",
      emp: "10001",
      role: "MERN stack",
    },
    {
      name: "king54456",
      emp: "33000",
      role: "HR",
    },
    {
      name: "raja534",
      emp: "44000",
      role: "TESTER",
    },
    {
      name: "surya345",
      emp: "10131",
      role: "MERN stack",
    },
    {
      name: "king4356",
      emp: "30333",
      role: "HR",
    },
    {
      name: "raja23",
      emp: "48844",
      role: "TESTER",
    },
  ];

  const role = ["MERN STACK", "HR", "TESTER"];
  const header = ["Name", "Emp", "Role"];

  useEffect(() => {
    let filterData = [];
    if (search?.toString()?.trim() === "" || filter === "All") {
      filterData = data.filter((item) => {
        return filter !== "All"
          ? item.role.toLowerCase() === filter.toLowerCase()
          : item.role &&
              item.name
                .toLowerCase()
                .includes(search?.toString()?.toLowerCase());
      });
    } else {
      filterData = data.filter((item) => {
        return (
          item.name.toLowerCase().includes(search?.toString()?.toLowerCase()) &&
          (filter !== "All"
            ? item.role.toLowerCase() === filter.toLowerCase()
            : filter)
        );
      });
    }
    setFilterData(filterData);
  }, [search, filter]);

  const handleSort = (sortname) => {
    console.log(sortname);
  };

  return (
    <>
      TableComp
      <input
        placeholder="search..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        {role.map((item, i) => {
          return (
            <option key={i} value={item}>
              {item}
            </option>
          );
        })}
      </select>
      <table>
        <thead>
          <tr>
            {header.map((item, i) => {
              return (
                <th key={i} onClick={() => handleSort(item)}>
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {fillterdata.map((item, i) => {
            return (
              <tr key={i}>
                <td>{item.name}</td>
                <td>{item.emp}</td>
                <td>{item.role}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TableComp;
