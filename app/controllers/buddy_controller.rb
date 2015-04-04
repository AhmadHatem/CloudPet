class BuddyController < ApplicationController
	before_action :set_buddy , only: [:show, :edit, :update, :destroy]
	before_filter :load_pet
	def index
		@buddies = Buddy.all
	end

	def new
		@buddy = Buddy.new 
	end
	def show
		@buddy = Buddy.find(params[:id])
	end
	def edit
	end
	def destroy
		@buddy.destroy
		respond_to do |format|
      format.html { redirect_to feeds_url, notice: 'Pet Buddy was successfully destroyed.' }
      format.json { head :no_content }
    	end
	end
	def update
	end
	def create
		@buddy= Buddy.new(buddy_params)
		@buddy.register = @register
		if User.where(:username => pet_buddy).blank?
  			render 'new'
		else
			if @buddy.save
				redirect_to @register
			else
				render 'new'
			end 
		end
	end
	def set_buddy
		@buddy = buddy.find(params[:id])
	end 
	def load_pet
		@register = session[:register] || 0
	end
	 def buddy_params
      params.require(:buddy).permit(:user, :pet_buddy, :can_feed, :can_edit_schedule)
    end
  
end
