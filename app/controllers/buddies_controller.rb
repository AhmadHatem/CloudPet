class BuddiesController < ApplicationController
  before_action :set_buddy, only: [:show, :edit, :update, :destroy]

  
  def index
    
    #here im creating an array of current user pets' buddies to be displayed and im checking that the id of current pet is the id linked to the buddy if true then show this buddy.

    @buddies = []
    current_user.registers.each do |pet|
      buds = Buddy.where(:register_id => pet.id)
      buds.each do |buddy|
        if buddy.register == pet
          @buddies += [buddy]
      end
    end
  end
  end

  
  def show
  end

  
  def new
    @buddy = Buddy.new
  end

  
  def edit
  end

  
  def create
    @buddy = Buddy.new(buddy_params)
    user = User.where(:username => @buddy.username).first
    pet = load_pet
    @buddy.user = user
    @buddy.register = pet
    if !(user.blank?) then
      if !(user == current_user) then
        respond_to do |format|
        if @buddy.save
          format.html { redirect_to @buddy, notice: 'Buddy was successfully created.' }
          format.json { render :show, status: :created, location: @buddy }
        else
          format.html { render :new }
          format.json { render json: @buddy.errors, status: :unprocessable_entity }
        end
        end
      else
        render 'new'
      end
  else
    render 'new'
  end
end
  

  def update
    respond_to do |format|
      if @buddy.update(buddy_params)
        format.html { redirect_to @buddy, notice: 'Buddy was successfully updated.' }
        format.json { render :show, status: :ok, location: @buddy }
      else
        format.html { render :edit }
        format.json { render json: @buddy.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @buddy.destroy
    respond_to do |format|
      format.html { redirect_to buddies_url, notice: 'Buddy was successfully deleted.' }
      format.json { head :no_content }
    end
  end
  #loads pet id from the saved cache
  def load_pet
    pet_id = Rails.cache.read(:pet_id)
    pet = Register.where(:id => pet_id).first
  end
  private
    # Use callbacks to share common setup or constraints between actions.
    def set_buddy
      @buddy = Buddy.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def buddy_params
      params.require(:buddy).permit(:username, :can_feed, :can_schedule)
    end
end
