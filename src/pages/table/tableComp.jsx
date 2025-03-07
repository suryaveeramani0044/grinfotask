import React, { useEffect, useState } from "react";
import { data } from "../../component/data/data";
import Modal from "../../component/modal/modal";
const TableComp = () => {
  const [sort, setSort] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [fillterdata, setFilterData] = useState([]);
  const role = ["MERN STACK", "HR", "TESTER"];
  const header = ["Name", "Emp", "Role"];

  //modal
  const [isOpen, setOpen] = useState(false);
  const [isOpen1, setOpen1] = useState(false);

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

    setFilterData(
      filterData.sort((a, b) => {
        for (let rule of sort) {
          const key = rule.name.toLowerCase();
          const order = rule.order;
          if (a[key] < b[key]) return order === "asc" ? -1 : 1;
          if (a[key] > b[key]) return order === "asc" ? 1 : -1;
        }
        return 0;
      })
    );
  }, [search, filter, sort]);

  const handleSort = (sortname) => {
    const anySortData = sort.find((item) => {
      return item.name === sortname;
    });
    if (!anySortData) {
      setSort([...sort, { name: sortname, order: "asc" }]);
    } else {
      setSort(
        sort
          .map((item) =>
            item.name === sortname
              ? {
                  ...item,
                  order:
                    item.order === "asc"
                      ? "desc"
                      : item.order === ""
                      ? "asc"
                      : "",
                }
              : item
          )
          .filter((item) => item.order)
      );
    }
  };

  const handleIcon = (headname) => {
    let header = sort.find((item) => item?.name === headname);
    if (header) {
      return (
        <h5>
          {header?.name}
          <span className={header?.order}>^</span>
        </h5>
      );
    } else {
      return headname;
    }
  };
  return (
    <div className="container">
      <input
        placeholder="search..."
        name="search"
        value={search}
        className="search"
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
                  {handleIcon(item)}
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
      <Modal
        name="Modal 1"
        isOpen={isOpen}
        setOpen={setOpen}
        title="Join our Team"
        content="Join us for Latest update Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      >
        <div>
          <input placeholder="Email" />
          <br />
          <button className="subscribe">Subscribe</button>
        </div>
      </Modal>
      <Modal
        name="Modal 2"
        isOpen={isOpen1}
        setOpen={setOpen1}
        title="Conformation"
        content="Are you sure you want share this post on your social media ? sharing this content will let your friends and followers know about it"
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <button className="cancel">Cancel</button>{" "}
          <button className="subscribe">Subscribe</button>
        </div>
      </Modal>
    </div>
  );
};

export default TableComp;
