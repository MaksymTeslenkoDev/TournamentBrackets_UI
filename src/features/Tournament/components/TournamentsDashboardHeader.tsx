import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Typography } from "@material-ui/core";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { TBFormTextField } from "../../../Components/TextField";
import { useAppSelector } from "../../../hooks";
import { selectListQueryParams } from "../tournamentSelectors";
import {
  accessTypesOptinsArray,
  OrderDirection,
  sortingDirections,
  sortingFields,
  TournamentAccessType,
} from "../types";
import { useDashboardHeaderStyles } from "./styles/useDashboardHeaderStyles";
import { useTournamentSettingsTextField } from "./TournamentSettingsTextField/TournamentSettingTextField";

interface DashboardHeaderProps {
  count: number;
  handleChangeQueryParam: (paramName: string, value: string) => void;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  count,
  handleChangeQueryParam,
}) => {
  const classes = useDashboardHeaderStyles();
  const { TBSelectQueryParamListTournaments } =
    useTournamentSettingsTextField();
  const queryParams = useAppSelector(selectListQueryParams);

  const methods = useForm<{
    search: string;
    orderBy: string;
    sortDirection: OrderDirection;
    accessType: TournamentAccessType;
  }>({
    mode: "onChange",
    defaultValues: {
      search: queryParams.search,
      orderBy: queryParams.orderBy,
      sortDirection: queryParams.orderDirection,
      accessType: queryParams.accessType,
    },
  });

  const [search, orderBy, sortDirection, accessType] = methods.watch([
    "search",
    "orderBy",
    "sortDirection",
    "accessType",
  ]);

  React.useEffect(() => {
    const delayFunc = setTimeout(() => {
      handleChangeQueryParam("search", search);
    }, 1000);

    return () => {
      clearTimeout(delayFunc);
    };
  }, [search]);

  React.useEffect(() => {
    handleChangeQueryParam("orderBy", orderBy);
  }, [orderBy]);

  React.useEffect(() => {
    handleChangeQueryParam("accessType", accessType);
  }, [accessType]);

  React.useEffect(() => {
    handleChangeQueryParam("orderDirection", sortDirection);
  }, [sortDirection]);
  return (
    <FormProvider {...methods}>
      <Box className={classes.root}>
        <Box className={classes.left}>
          <Typography className={classes.headerTitle}>Tournaments</Typography>
          <Typography>
            <Typography className={classes.countValue} component="span">
              {count}
            </Typography>
            {` tournaments`}
          </Typography>
          <TBFormTextField
            name="search"
            size="small"
            label=""
            className={classes.tournamentsSearchTextField}
            color="primary"
            iconComponent={<FontAwesomeIcon icon={faSearch} />}
            inputProps={{
              placeholder: "Search tournament",
            }}
          />
        </Box>
        <Box className={classes.right}>
          <Box className={classes.orderFieldWrapper}>
            <Typography>Access Type</Typography>
            <TBSelectQueryParamListTournaments
              data-testid="game-type-field"
              id="accessType"
              name="accessType"
              label=""
              color="primary"
              className={classes.orderField}
              inputProps={{ MenuProps: { disableScrollLock: true } }}
              options={accessTypesOptinsArray}
            />
          </Box>
          <Box className={classes.orderControllers}>
            <Box className={classes.orderFieldWrapper}>
              <Typography>Sort by</Typography>
              <TBSelectQueryParamListTournaments
                data-testid="game-type-field"
                id="orderBy"
                name="orderBy"
                label=""
                color="primary"
                className={classes.orderField}
                inputProps={{ MenuProps: { disableScrollLock: true } }}
                options={sortingFields}
              />
            </Box>
            <Box className={classes.orderFieldWrapper}>
              <TBSelectQueryParamListTournaments
                data-testid="game-type-field"
                id="sortDirection"
                name="sortDirection"
                label=""
                color="primary"
                className={classes.orderField}
                inputProps={{ MenuProps: { disableScrollLock: true } }}
                options={sortingDirections}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </FormProvider>
  );
};
