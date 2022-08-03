import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {
  CreateWorkshops,
  Dashboard,
  DetailsWorkShops,
  Educators,
  Instructor,
  VisitInstructerProfile,
  ScriptWorkshops,
  Workshops,
  EducatorsProfile,
  InstructerProfile,
  Attendance,
  AttendanceList,
  CreateSCRIPTWorkshop,
} from "../../views";
import { MainLayout } from "./MainLayout";

export const MainRoutes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="workshops" element={<Workshops />} />
          <Route path="scriptworkshops" element={<ScriptWorkshops />} />
          <Route path="detailsworkshops" element={<DetailsWorkShops />} />
          <Route path="createWorkshops" element={<CreateWorkshops />} />
          <Route path="instructor" element={<Instructor />} />
          <Route path="educators" element={<Educators />} />
          <Route
            path="visitInstructerprofile"
            element={<VisitInstructerProfile />}
          />
          <Route path="educatorsProfile" element={<EducatorsProfile />} />
          <Route path="instructerProfile" element={<InstructerProfile />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="attendanceList" element={<AttendanceList />} />
          <Route
            path="createSCRIPTWorkshop"
            element={<CreateSCRIPTWorkshop />}
          />
          <Route path="" element={<Navigate to="dashboard" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
