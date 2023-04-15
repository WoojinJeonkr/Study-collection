import React from "react";
import dayjs from "dayjs";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Policy } from "components";

interface Column {
  id: "title" | "chapterNum" | "createdDate" | "modifiedDate";
  label: string;
  minWidth?: string;
  align?: "center";
  format?: (value: string) => string;
}

const columns: readonly Column[] = [
  { id: "title", label: "제목", minWidth: "70%" },
  { id: "chapterNum", label: "장", minWidth: "5%" },
  {
    id: "createdDate",
    label: "작성 일자",
    minWidth: "5%",
    format: (value: string) => dayjs(value).format("YYYY년 MM월 DD일 HH:mm:ss"),
  },
  {
    id: "modifiedDate",
    label: "수정 일자",
    minWidth: "5%",
    format: (value: string) => dayjs(value).format("YYYY년 MM월 DD일 HH:mm:ss"),
  },
];

function PolicyTable(props: { data: Policy[]; url: string }) {
  const { data, url } = props;
  const navigate = useNavigate();

  return (
    <Paper
      sx={{
        width: "100%",
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
        mt: 10,
      }}
    >
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => {
              const onMoveDetail = () => {
                navigate(`${url}/detail/${row.id}`, { state: { row } });
              };
              return (
                <TableRow key={row.id} onClick={onMoveDetail}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === "string"
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default PolicyTable;
