import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { displayJob } from "../../slices/jobSlice";
const Filter = () => {
  const [text, setText] = useState();
  const [debounce, setDebounce] = useState();
  const [status, setStatus] = useState();
  const [type, setType] = useState();
  const [ord, setOrd] = useState();

  const dispatch = useDispatch();
  useEffect(() => {
    const search = setTimeout(() => setDebounce(text), 1000);
    return () => clearTimeout(search);
  }, [text]);

  useEffect(() => {
    const params = {
      q: debounce,
      status,
      type,
      _sort: ord === "a-z" || ord === "z-a" ? "company" : "date",
      _order: ord === "a-z" || ord === "En Eski" ? "asc" : "desc",
    };

    axios
      .get("http://localhost:3000/jobs", { params })
      .then((res) => {
        console.log(res.data);
        dispatch(displayJob(res.data));
      })
      .catch((err) => console.log(err));
  }, [debounce, status, type, ord]);

  return (
    <section className="filter">
      <div className="container">
        <h2>FİLTRELEME FORMU</h2>
        <form>
          <div className="form-group">
            <label>Ara</label>
            <input type="text" onChange={(e) => setText(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="status">Durum</label>
            <select
              value={status}
              name="status"
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="">Seçiniz</option>
              <option value="Mülakat">Mülakat</option>
              <option value="Devam Ediyor">Devam Ediyor</option>
              <option value="Reddedildi">Reddedildi</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="type">Tür</label>

            <select name="type" onChange={(e) => setType(e.target.value)}>
              <option value="">Seçiniz</option>
              <option value="Tam Zamanlı">Tam Zamanlı</option>
              <option value="Yarı Zamanlı">Yarı Zamanlı</option>
              <option value="Uzaktan">Uzaktan</option>
              <option value="Staj">Staj</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="sort">Sırala</label>
            <select name="sort" onChange={(e) => setOrd(e.target.value)}>
              <option value="">Seçiniz</option>
              <option value="a-z">a-z</option>
              <option value="z-a">z-a</option>
              <option value="En Yeni">En Yeni</option>
              <option value="En Eski">En Eski</option>
            </select>
          </div>

          <button type="reset" onClick={() => {}}>
            FİLTRELERİ SIFIRLA
          </button>
        </form>
      </div>
    </section>
  );
};

export default Filter;
