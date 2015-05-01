class RegistersController < ApplicationController

	def show
    @register = Register.find(params[:id])
  end
  def index
    @register = current_user.registers
    
    #Here im creating an array of pets to be showed to the current user who is considered to be a buddy that have access on these pets.

    @registers = []
    @buddies = Buddy.where(:user => current_user)
    @buddies.each do |buddy|
    if !@register.include?(buddy.register)
      @registers += [buddy.register]  
    end
    end   
  end
  

  def edit
  @register = Register.find(params[:id])
	end
	def update
  @register = Register.find(params[:id])
 	end


	def new
    @register= Register.new
  	end
  def create
  @register = Register.new(register_params)
  @register.User = current_user
 
  if @register.save
  redirect_to @register
else
  render'new'
end
end


def destroy
  @register = Register.find(params[:id])
  @register.destroy
 
  redirect_to registers_path
end




def register1
pet_id = Rails.cache.read(:pet_id)

@register = Register.where(params[:pet_id]).first
@device = Device.where(:id => params[:text2].to_i).first
if (@device.User==current_user)
@device.Register =  @register
end
  if !(@device.User.blank?) then 
    respond_to do |format|
      if @device.save then 
        format.html { redirect_to @device, notice: 'Device was successfully created.' }
        format.json { render :show, status: :created, location: @device }
      else
        format.html { render :new }
        format.json { render json: @device.errors, status: :unprocessable_entity }
      end
    end
  end
end 



 
private
  def register_params
    params.require(:register).permit(:name, :breed, :gender, :species, :image, :date_of_birth)
  end
end
