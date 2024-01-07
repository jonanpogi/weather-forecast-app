import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainerProps,
  Hidden,
} from "@mui/material";
import { IWeatherData } from "../pages/Weather";

type Props = {
  headers: string[];
  rows: IWeatherData[];
} & TableContainerProps;

const AppTable = ({ headers, rows, ...props }: Props) => {
  return (
    <TableContainer component={Paper} {...props}>
      <Table aria-aria-label="simple table">
        <TableHead>
          <TableRow>
            {headers.map((header, index) => {
              if (index > 1) {
                return (
                  <Hidden smDown>
                    <TableCell key={index}>{header}</TableCell>
                  </Hidden>
                );
              }

              return <TableCell key={index}>{header}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.temp}</TableCell>
              <Hidden smDown>
                <TableCell>{row.description}</TableCell>
                <TableCell>{row.main}</TableCell>
                <TableCell>{row.pressure}</TableCell>
                <TableCell>{row.humidity}</TableCell>
              </Hidden>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AppTable;
