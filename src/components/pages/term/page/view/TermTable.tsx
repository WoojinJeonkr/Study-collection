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
  // TablePagination,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Term } from "components";

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

function TermTable(props: { data: Term[]; url: string }) {
  const { data, url } = props;
  // const [page, setPage] = React.useState(0);
  // const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const navigate = useNavigate();

  // const handleChangePage = (event: unknown, newPage: number) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (
  //   event: React.ChangeEvent<HTMLInputElement>,
  // ) => {
  //   setRowsPerPage(+event.target.value);
  //   setPage(0);
  // };

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
      {/* <TablePagination
        rowsPerPageOptions={[10, 20, 30]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
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
            {data
              // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                const onMoveDetail = () => {
                  navigate(`${url}/detail/${row.termId}`, { state: { row } });
                };
                return (
                  <TableRow key={row.termId} onClick={onMoveDetail}>
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

export default TermTable;
