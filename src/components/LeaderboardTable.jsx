export default function LeaderboardTable() {
  return (
    <div class="w-full mt-5">
      <table class="table w-full">
        <thead>
          <tr>
            <th>Company</th>
            <th>TOKENS</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="flex items-center space-x-3">
                <div class="avatar">
                  <div class="mask mask-squircle w-12 h-12">
                    <img
                      src="https://logospng.org/download/gerdau/logo-gerdau-escudo-1024.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div class="font-bold">Gerdau</div>
                  <div class="text-sm opacity-50">Steel industry</div>
                </div>
              </div>
            </td>
            <td>
              27.000 tokens
              <br />
              <span class="badge badge-ghost badge-sm">
                Reflorestation
              </span>
            </td>
            <th>
              <button class="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
