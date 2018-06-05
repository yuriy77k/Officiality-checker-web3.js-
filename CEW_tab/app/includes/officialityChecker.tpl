<main class="tab-pane active" 
      ng-if="globalService.currentTab === globalService.tabs.officialityChecker.id"
      ng-controller='officialityCheckerCtrl'
      ng-cloak>

    <article>
        <h1 class="text-center" translate="NAV_OfficialityChecker" aria-live="polite">Callisto Officiality Checker</h1>
        <p class="text-center" translate="OC_Label_1">
            Allows you to check whether a certain media resource is considered "official" at Callisto or not.
        </p>

        <section>
            <div class="block">

                <form ng-submit="handleSubmit()">
                    <label translate="OC_Label_2">Enter link to the media resource:</label>
                    <input ng-model="input.link"
                           ng-change="hide()"
                           class="form-control">

                    <div ng-show="input.show==1" class="row">
                        <h2 class="text-center"><font color="#000000" translate="OC_Loading">loading...</font></h2>
                    </div>
                    <div ng-show="input.show==2" class="row">
                        <h2 class="text-center"><font color="#00cc00" translate="OC_Official">Is official.</font></h2>
                    </div>
                    <div ng-show="input.show==3" class="row">
                        <h2 class="text-center"><font color="#ff0000" translate="OC_NotOfficial">Is not official!</font></h2>
                    </div>

                    <div class="row row-justify">
                        <button
                                style="max-width: 272px;"
                                translate="OC_Check" class="btn btn-primary btn-block text-center">Check
                        </button>
                    </div>
                </form>
            </div>
        </section>

    </article>

</main>
