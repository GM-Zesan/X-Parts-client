import React from "react";

const Skill = () => {
    return (
        <section id="skills" class="skills">
            <div class="container" data-aos="fade-up">
                <h2 class="section-title">
                    Ski<span style={{ color: "#008037" }}>ll</span>
                </h2>

                <div class="row skills-content">
                    <div class="col-lg-6">
                        <div class="progress">
                            <span class="skill">
                                HTML <i class="val">100%</i>
                            </span>
                            <div class="progress-bar-wrap">
                                <div
                                    class="progress-bar"
                                    role="progressbar"
                                    style={{ width: "70%" }}
                                    aria-valuenow="70"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                        </div>

                        <div class="progress">
                            <span class="skill">
                                CSS <i class="val">90%</i>
                            </span>
                            <div class="progress-bar-wrap">
                                <div
                                    class="progress-bar"
                                    role="progressbar"
                                    style={{ width: "50%" }}
                                    aria-valuenow="50"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                        </div>

                        <div class="progress">
                            <span class="skill">
                                JavaScript <i class="val">75%</i>
                            </span>
                            <div class="progress-bar-wrap">
                                <div
                                    class="progress-bar"
                                    role="progressbar"
                                    style={{ width: "70%" }}
                                    aria-valuenow="70"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="progress">
                            <span class="skill">
                                PHP <i class="val">80%</i>
                            </span>
                            <div class="progress-bar-wrap">
                                <div
                                    class="progress-bar"
                                    role="progressbar"
                                    style={{ width: "75%" }}
                                    aria-valuenow="75"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                        </div>

                        <div class="progress">
                            <span class="skill">
                                React <i class="val">90%</i>
                            </span>
                            <div class="progress-bar-wrap">
                                <div
                                    class="progress-bar"
                                    role="progressbar"
                                    style={{ width: "85%" }}
                                    aria-valuenow="85"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                        </div>

                        <div class="progress">
                            <span class="skill">
                                Express <i class="val">55%</i>
                            </span>
                            <div class="progress-bar-wrap">
                                <div
                                    class="progress-bar"
                                    role="progressbar"
                                    style={{ width: "65%" }}
                                    aria-valuenow="55"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skill;
