import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


export default function TableResults (props) {
        return (
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Height</TableCell>
                            <TableCell align="right">Mass</TableCell>
                            <TableCell align="right">eye color</TableCell>
                            <TableCell align="right">birth year</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.listResults.map(row => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.height}</TableCell>
                                <TableCell align="right">{row.mass}</TableCell>
                                <TableCell align="right">{row.eyeColor}</TableCell>
                                <TableCell align="right">{row.birthYear}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        );
}

