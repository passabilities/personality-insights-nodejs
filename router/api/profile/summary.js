/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


'use strict';


var getProfile = require('../../../helpers/personality-insights').profile;
var TextSummary = require('../../../public/js/components/personality-text-summary.standalone');


function getSummary(req, res, next) {
  var profile = getProfile(req.body).then(profile => {
      var textSummary = new TextSummary(req.body.language),
          summary = textSummary.getSummary(profile);

      res.json(summary);
  });
}


module.exports = (router) => {
  console.log('here')
  router.post('/profile/summary', getSummary);
};
