import React from 'react'
import classes from './../css/css_modules/Profile.module.css'

const Profile = () => {
      return (
            <div className={classes.content}>
                  <div>
                        <img className={classes.img} src="https://s1.1zoom.ru/b5050/630/DOTA_2_Templar_Assassin_501858_2560x1440.jpg" />
                  </div>
                   <div>
                        ava + description
                  </div>
                  <div>
                        Posts
                        <div>
                               New post
                        </div>
                        <div>
                              <div>
                                    post 1
                              </div>
                              <div>
                                     post 2
                              </div>
                        </div>
                   </div>
            </div>
      )
}

export default Profile
