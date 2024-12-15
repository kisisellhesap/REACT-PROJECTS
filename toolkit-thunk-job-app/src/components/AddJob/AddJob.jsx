import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { addJob } from "../../slices/jobSlice";
const AddJob = () => {
  const dispatch = useDispatch();

  const addItem = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newJob = Object.fromEntries(formData.entries());

    newJob.date = Date.now();

    axios
      .post("http://localhost:3000/jobs", newJob)
      .then((res) => {
        console.log(res.data);
        dispatch(addJob(res.data));
        e.target.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className="add-job">
      <div className="container">
        <h2>YENİ İŞ EKLE</h2>
        <form onSubmit={addItem}>
          <div className="form-group">
            <label htmlFor="position">Pozisyon</label>
            <input name="position" type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="location">Lokasyon</label>
            <input type="text" name="location" />
          </div>
          <div className="form-group">
            <label htmlFor="company">Şirket</label>
            <input type="text" name="company" />
          </div>
          <div className="form-group">
            <label htmlFor="status">Durum</label>
            <select name="status">
              <option value="Seçiniz">Seçiniz</option>
              <option value="Mülakat">Mülakat</option>
              <option value="Devam Ediyor">Devam Ediyor</option>
              <option value="Reddedildi">Reddedildi</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="type">Tür</label>
            <select name="type">
              <option value="Seçiniz">Seçiniz</option>
              <option value="Tam Zamanlı">Tam Zamanlı</option>
              <option value="Yarı Zamanlı">Yarı Zamanlı</option>
              <option value="Uzaktan">Uzaktan</option>
              <option value="Staj">Staj</option>
            </select>
          </div>

          <button type="submit"> EKLE</button>
        </form>
      </div>
    </section>
  );
};

export default AddJob;
