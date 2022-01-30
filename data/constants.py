RAW_DATA = "raw/M&E Map export - Nepal UPDATED 14 01 2022.xlsx"
OUTPUT_DATA = "../src/data.json"
SUMMARY_DATA = "../src/summary.json"

df_types = {
    "Bricks produced": "Int64",
    "Houses built": "Int64",
    "Schools": "Int64",
    # "Jobs (production)": "Int64",
    # "Jobs (construction)": "Int64",
    "Total jobs ": "Int64",
    "Start Date Name": str,
}

cols = [
    "Name",
    "District",
    "Province Name",
    "Type",
    "Latitude",
    "Longitude",
    "Gender",
    "Start Date Name",
    "Status",
    "Bricks produced",
    "Houses built",
    "Schools",
    "CO2 saved",
    # "Jobs (production)",
    # "Jobs (construction)",
    "Total jobs ",
    "Description",
]
