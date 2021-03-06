/*  Melvor Typing Project v1.9.3: Fetches and Documents Melvor Idle

    Copyright (C) <2021>  <Coolrox95>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
// @ts-check

const { getAllSources, transferJSDoc } = require("./sourceGetter");

// Downloads and updates the source files, and generates a new applyGuide.json
console.log('Updating source files...')
getAllSources('./rawSources/').then((result) => {
  transferJSDoc('./src/game/', './rawSources/', './src/game/');
}
)