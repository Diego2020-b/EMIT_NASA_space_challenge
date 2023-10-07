import earthaccess
import os
from osgeo import gdal
import numpy as np
import math
import rasterio as rio
import xarray as xr
import holoviews as hv
import hvplot.xarray
import netCDF4 as nc
mamba env create -f setup/emit_tutorials_windows.yml

