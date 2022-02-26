export const Dashboard = (customStyles) => {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      style={{ ...customStyles }}
    >
      <g>
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
      </g>
    </svg>
  );
};

export const Bucket = (customStyles) => {
  return (
    <svg
      x="0px"
      y="0px"
      viewBox="0 0 60 60"
      //   style="enable-background:new 0 0 60 60;"
      style={{ ...customStyles }}
    >
      <path
        d="M6.221,39.293c-0.391-0.391-1.023-0.391-1.414,0l-2.5,2.5c-1.769,1.769-1.769,4.646,0,6.414
		c0.855,0.856,1.995,1.329,3.207,1.329c1.211,0,2.351-0.473,3.207-1.329c1.768-1.769,1.768-4.646,0-6.414L6.221,39.293z"
      />
      <path
        d="M37.438,25.094l10.619,10.619c2.333-2.513,3.918-5.063,4.257-6.831l0.196-3.706L41.636,14.303l-0.321,1.866
		c-0.282,1.886-1.714,4.466-3.924,7.057C36.914,23.787,36.934,24.59,37.438,25.094z"
      />
      <path
        d="M30.402,51.793L19.89,41.309c-0.312-0.31-0.793-0.38-1.196-0.173c-1.34,0.681-2.514,1.103-3.489,1.257l-0.105,0.011
		l-1.839,0.091l11.696,11.696l2.725-1.079C28.513,52.836,29.521,52.292,30.402,51.793z"
      />
      <path
        d="M58.295,30.962l-3.89-3.89l-0.112,2.103c-0.385,2.161-2.121,5.042-4.765,7.904c-0.368,0.399-0.873,0.625-1.42,0.637
		c-0.014,0-0.026,0-0.04,0c-0.532,0-1.05-0.214-1.426-0.59L36.024,26.508c-1.249-1.249-1.314-3.217-0.153-4.579
		c1.944-2.281,3.242-4.553,3.471-6.077l0.564-3.28l-6.359-6.359c-0.5-0.5-1.189-0.754-2.05-0.754c-0.728,0-1.607,0.207-2.593,0.579
		C28.221,2.6,25.184,0,21.549,0c-4.136,0-7.5,3.364-7.5,7.5v9.756C7.555,24.043,2.626,31.861,5.262,34.497l6.089,6.089l3.592-0.178
		c0.751-0.127,1.733-0.491,2.844-1.056c1.179-0.599,2.591-0.38,3.513,0.538l10.52,10.47c0.448,0.447,0.656,1.063,0.57,1.691
		c-0.085,0.63-0.45,1.17-1.003,1.482c-1.371,0.775-2.276,1.211-3.024,1.458l-1.867,0.739l3.515,3.515
		c0.5,0.5,1.19,0.754,2.051,0.754c3.398,0,9.962-4.281,16.334-10.653C55.423,42.319,61.08,33.747,58.295,30.962z M27.049,20.941
		c0.702-0.81,1.37-1.621,2-2.429V30h-2V20.941z M32.132,7.627l0.001,0.002c0.255,0.257,0.26,1.165-0.361,2.733
		c-0.468,1.152-1.248,2.609-2.391,4.312c-0.072,0.107-0.14,0.212-0.214,0.319c-0.037,0.054-0.081,0.113-0.119,0.168V8.116
		c1.008-0.435,1.839-0.657,2.447-0.657C31.671,7.459,31.985,7.481,32.132,7.627z M21.549,2c2.826,0,5.16,2.145,5.464,4.892
		c-3.16,1.636-7.066,4.584-10.964,8.355V7.5C16.049,4.468,18.517,2,21.549,2z M16.576,17.527c3.942-3.942,7.625-6.754,10.473-8.389
		v8.694c-0.069,0.086-0.141,0.174-0.212,0.261c-0.266,0.327-0.535,0.655-0.815,0.985c-0.096,0.113-0.197,0.228-0.295,0.342
		c-0.288,0.334-0.579,0.669-0.88,1.004c-0.151,0.168-0.311,0.339-0.467,0.509c-0.259,0.283-0.517,0.565-0.784,0.848
		c-0.438,0.461-0.889,0.928-1.363,1.402c-6.609,6.609-12.509,10.067-14.92,10.067c-0.044,0-0.096-0.001-0.152-0.006
		c-0.169-0.013-0.373-0.052-0.482-0.161l-0.002-0.001C5.716,32.123,8.341,25.763,16.576,17.527z M31.584,33.535
		C30.641,34.479,29.385,35,28.049,35s-2.592-0.521-3.535-1.465c-0.944-0.943-1.465-2.199-1.465-3.535s0.521-2.592,1.465-3.535
		l1.414,1.414c-0.566,0.566-0.879,1.319-0.879,2.121s0.312,1.555,0.879,2.121c1.133,1.133,3.109,1.133,4.242,0
		c0.566-0.566,0.879-1.319,0.879-2.121s-0.313-1.555-0.879-2.121l1.414-1.414c0.944,0.943,1.465,2.199,1.465,3.535
		S32.528,32.592,31.584,33.535z"
      />
    </svg>
  );
};

export const Collection = (customStyles) => {
  return (
    <svg
      width="16px"
      height="16px"
      viewBox="0 0 16 16"
      class="bi bi-collection-fill"
      style={{ ...customStyles }}
    >
      <path d="M0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z" />
    </svg>
  );
};

export const Art = (customStyles) => {
  return (
    <svg
      x="0px"
      y="0px"
      viewBox="0 0 325.04 325.04"
      //   style="enable-background:new 0 0 325.04 325.04;"
      style={{ ...customStyles }}
    >
      <path
        d="M117.866,234.088c-2.956,14.532-4.875,21.558-16.092,22.458c-2.764,0.222-5.015,2.308-5.446,5.047
		c-0.432,2.738,1.069,5.416,3.631,6.477c0.721,0.298,17.877,7.308,37.921,7.309c0.003,0,0.005,0,0.007,0
		c13.968,0,25.95-3.386,35.612-10.063c11.45-7.912,19.344-20.294,23.541-36.788l-38.572-38.88
		C125.871,194.924,121.253,217.436,117.866,234.088z"
      />
      <path
        d="M322.745,63.336c-1.037-1.046-2.887-2.293-5.806-2.293c-3.423,0-12.516,0-67.74,46.992
		c-25.509,21.706-54.92,48.559-78.314,71.41l36.603,36.894c24.061-25.009,52.129-56.355,74.451-83.258
		c14.096-16.986,24.935-31.002,32.216-41.657C323.799,77.311,328.023,68.655,322.745,63.336z"
      />
      <path
        d="M182.595,278.479c-12.387,8.56-27.429,12.899-44.716,12.899c-22.753-0.001-41.919-7.649-44.046-8.527
		c-9.425-3.906-14.898-13.673-13.31-23.749c1.555-9.871,9.463-17.373,19.341-18.446c0.861-2.571,1.813-7.254,2.323-9.758
		c1.878-9.23,4.449-21.873,12.358-33.126c8.637-12.287,21.656-20.165,38.751-23.466c9.811-9.737,21.005-20.443,32.686-31.308
		c-5.905-1.281-11.185-5.127-14.017-10.944c-4.875-10.02-0.623-22.073,9.484-26.895c10.133-4.834,22.287-0.612,27.155,9.423
		c0.961,1.978,1.555,4.033,1.832,6.096c9.688-8.677,19.309-17.099,28.392-24.828c0.054-0.046,0.105-0.09,0.16-0.136
		c-10.209-19.536-24.849-36.845-42.687-50.098c-25.614-19.031-56.114-29.096-88.2-29.104c-0.01,0-0.017,0-0.025,0
		c-21.654,0-47.976,7.566-68.697,19.749C13.981,51.193-0.005,71.163,0,92.49c0.008,25.748,14.53,36.518,26.199,45.171
		c9.515,7.057,17.03,12.63,17.034,24.844c0.003,12.213-7.508,17.781-17.018,24.831c-11.665,8.648-26.184,19.412-26.176,45.163
		c0.006,21.324,14.001,41.299,39.406,56.244c20.736,12.198,47.072,19.78,68.73,19.786c0.015,0,0.028,0,0.042,0
		c39.305,0,76.254-15.171,104.044-42.72c20.837-20.655,34.656-46.416,40.273-74.442c-13.952,15.471-27.997,30.493-40.563,43.322
		C206.641,253.965,196.773,268.682,182.595,278.479z M111.054,77.103c2.498-10.871,13.4-17.657,24.354-15.167
		c10.939,2.478,17.793,13.282,15.313,24.138c-2.499,10.844-13.407,17.631-24.362,15.154
		C115.411,98.764,108.554,87.947,111.054,77.103z M45.054,114.152c-7.005-8.716-5.565-21.401,3.216-28.339
		c8.78-6.925,21.571-5.505,28.589,3.195c6.99,8.703,5.545,21.388-3.229,28.34C64.869,124.288,52.058,122.853,45.054,114.152z
		 M55.746,247.168c-8.786-6.944-10.231-19.629-3.226-28.342c7-8.696,19.796-10.122,28.581-3.18
		c8.778,6.943,10.224,19.629,3.225,28.327C77.327,252.686,64.53,254.111,55.746,247.168z"
      />
    </svg>
  );
};