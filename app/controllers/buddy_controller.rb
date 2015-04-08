class BuddyController < ApplicationController
	before_action :set_buddy , only: [:show, :edit, :update, :destroy]
	def index
		@buddies = Buddy.all
	end

	def new
		@buddy = Buddy.new 
	end
	def show
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
		@buddy= Buddy.new
		@buddy.register = @register
		if @buddy.save
			redirect_to @buddy
		else
			render 'new'
	end 
end
	def set_buddy
		@buddy = buddy.find(params[:id])
	end 
	 def buddy_params
      params.require(:buddy).permit(:user, :register, :can_feed, :can_edit_schedule)
    end
end
